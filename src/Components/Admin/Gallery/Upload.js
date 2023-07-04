import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import shortid from 'shortid';

import './style.css';

const FileUploadWithPreview = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const formatFileSize = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    const fileArray = Array.from(files);

    const updatedFiles = fileArray.map((file) => ({
      id: shortid.generate(),
      name: file.name,
      type: file.type,
      image: URL.createObjectURL(file),
      datetime: file.lastModifiedDate.toLocaleString('en-IN'),
      size: formatFileSize(file.size),
    }));

    setSelectedFiles((prevFiles) => [...prevFiles, ...updatedFiles]);
  };

  const handleDeleteSelectedFile = (id) => {
    if (window.confirm('Are you sure you want to delete this image?')) {
      const updatedFiles = selectedFiles.filter((file) => file.id !== id);
      setSelectedFiles(updatedFiles);
    }
  };

  const handleUpload = (event) => {
    event.preventDefault();
    if (selectedFiles.length > 0) {
      setUploadedFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
      setSelectedFiles([]);
    } else {
      alert('Please select file(s)');
    }
  };

  const handleDeleteFile = (id) => {
    if (window.confirm('Are you sure you want to delete this image?')) {
      const updatedFiles = uploadedFiles.filter((file) => file.id !== id);
      setUploadedFiles(updatedFiles);
    }
  };

  return (
    <div className="fileupload-view">
      <div className="row justify-content-center m-0">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body">
              <div className="kb-data-box">
                <div className="kb-modal-data-title">
                  <div className="kb-data-title">
                    <h6>Upload your image</h6>
                  </div>
                </div>
                <form onSubmit={handleUpload}>
                  <div className="kb-file-upload">
                    <div className="file-upload-box">
                      <input
                        type="file"
                        id="fileupload"
                        className="file-upload-input"
                        onChange={handleFileChange}
                        multiple
                      />
                      <span>
                        Drag and drop or <span className="file-link">Choose your files</span>
                      </span>
                    </div>
                  </div>
                  <div className="kb-attach-box mb-3">
                    {selectedFiles.map((file) => (
                      <div className="file-atc-box" key={file.id}>
                        {file.name.match(/.(jpg|jpeg|png|gif|svg)$/i) ? (
                          <div className="file-image">
                            <img src={file.image} alt="" />
                          </div>
                        ) : (
                          <div className="file-image">
                            <i className="far fa-file-alt"></i>
                          </div>
                        )}
                        <div className="file-detail">
                          <h6>{file.name}</h6>
                          <p></p>
                          <p>
                            <span>Size: {file.size}</span>
                            <span className="ml-2">Modified Time: {file.datetime}</span>
                          </p>
                          <div className="file-actions">
                            <button
                              type="button"
                              className="file-action-btn"
                              onClick={() => handleDeleteSelectedFile(file.id)}
                            >
                              <i className="fas fa-trash-alt"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="kb-buttons-box">
                    <button type="submit" className="btn btn-primary form-submit">
                      Upload
                    </button>
                  </div>
                </form>
                {uploadedFiles.length > 0 && (
                  <div className="kb-attach-box">
                    <hr />
                    {uploadedFiles.map((file) => (
                      <div className="file-atc-box" key={file.id}>
                        {file.name.match(/.(jpg|jpeg|png|gif|svg)$/i) ? (
                          <div className="file-image">
                            <img src={file.image} alt="" />
                          </div>
                        ) : (
                          <div className="file-image">
                            <i className="far fa-file-alt"></i>
                          </div>
                        )}
                        <div className="file-detail">
                          <h6>{file.name}</h6>
                          <p>
                            <span>Size: {file.size}</span>
                            <span className="ml-3">Modified Time: {file.datetime}</span>
                          </p>
                          <div className="file-actions">
                            <button
                              className="file-action-btn"
                              onClick={() => handleDeleteFile(file.id)}
                            >
                              <i className="fas fa-trash-alt"></i>
                            </button>
                            <a
                              href={file.image}
                              className="file-action-btn"
                              download={file.name}
                            >
                              <i className="fas fa-download"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUploadWithPreview;
