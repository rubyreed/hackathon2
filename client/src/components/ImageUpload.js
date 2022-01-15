import React, { useContext, useState } from 'react';
import { AuthContext } from "../providers/AuthProvider";

// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import axios from 'axios';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

// Our app
function ImageUpload({id}) {
  const [files, setFiles] = useState([]);
  return (
      <div className="App">
          <FilePond
              files={files}
              onupdatefiles={setFiles}
              allowMultiple={true}
              maxFiles={1}
              server={`/api/users/image/${id}`}
              name="files"
              labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
          />
      </div>
  );
}

export default ImageUpload