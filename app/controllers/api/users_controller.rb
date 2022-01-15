class Api::UsersController < ApplicationController


  before_action :set_user, only: [:show, :update, :destroy]
  def show
    render json: @user
  end

  def update
    if (@user.update(user_params))
      render json: @user
    end

  def image
    file = params[:files]
    user = User.find(params[:id])

    puts 'file'
    puts file
    # save to cloudinary
    if file
        begin
          # ext = File.extname(file.tempfile)
          puts 'Trying to save to cloudinary'
          puts '---------------------'
          cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true, resource_type: :auto)
          puts '---------------------'
          puts cloud_image
        rescue => e
           puts "error occurred"
           p e
           render json: { errors: e }, status: 422
           return 
        end
    end
    
    # save to db
    Image.new( user_id: current_user.id, url: cloud_image['secure_url'] )
      # image = user.images.new( url: cloud_image['secure_url'] )
      if(image.save)
          render json: image
      else
          render json: { errors: image.errors }, status: 422
      end
    end





  end

  def destroy
    @user.destroy
    render json: @user
  end

  private
    def set_user
      @user = User.find(params[:id])
    end

    def user_params
      params.require(:user).permit(:email, :password, :name, :image, :id )
    end

end
