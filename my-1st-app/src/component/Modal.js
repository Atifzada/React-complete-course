function Modal(props) {
    // function confirmHandler() {
    //     props.onCancel();
    // }
    // function cancelHandler() {
    //     props.onConfirm();
    // }
  return (
    <div className="modal">
      <p>Are You Sure?</p>
      <button className="btn btn--alt" onClick={props.onCancel}>Cancel</button>
      <button className="btn" onClick= {props.onConfirm}>Confirm</button>
    </div>
  );
}
export default Modal;
