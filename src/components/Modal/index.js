export const DeleteModal = (props) => {
  return (
    <div className="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <div>{props.title}</div>
            <button
              type="button"
              className="user-modal-close-button"
              onClick={() => props.handleModal()}
            >
              X
            </button>
          </div>

          <div className="modal-body">
            <div className="modal-body-desc">
              <img
                alt=""
                src={require("../../assets/images/questionMark.png")}
                className="logo"
              />
              <p className="modal-body-text">Are you Sure?</p>
            </div>
            <div className="modal-body-buttons">
              <button
                type="button"
                className="modal-button"
                onClick={() => {
                  props.handleDelete(props.selectedUser);
                  props.handleModal();
                }}
              >
                ok
              </button>
              <button
                type="button"
                className="modal-button"
                onClick={() => props.handleModal()}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
