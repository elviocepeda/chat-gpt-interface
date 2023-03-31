import { useState } from "react";
import { getColors } from "../../common/constants";
import { AvatarForm } from "../../components";
import { useStore } from "../../store";
import { ArrowLeftIcon } from "../icons";
import "./ChangeAvatarModal.css";

export const ChangeAvatarModal = ({ closeModal }) => {
  const { store } = useStore();
  const { theme } = store;
  const { bgColor, border } = getColors(theme);
  const [uploadedImage, setUploadedImage] = useState(null);
  const handleChange = (e) => {
    setUploadedImage(window.URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="modal_avatar_wrapper">
      <div
        className="modal_avatar_container"
        style={{ backgroundColor: bgColor, border: `1px solid ${border}` }}
      >
        <div className="modal_avatar_header">
          <p style={{ color: border }}>CAMBIAR FOTO</p>
          <div onClick={() => closeModal(false)}>
            <ArrowLeftIcon />
          </div>
        </div>
        <div className="modal_avatar_body">
          <div className="modal_form_container">
            <AvatarForm setPreview={handleChange} closeModal={closeModal} />
          </div>
          <div
            className="modal_preview_container"
            style={{
              backgroundImage: uploadedImage ? `url(${uploadedImage})` : "",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              border: `1px solid ${border}`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
