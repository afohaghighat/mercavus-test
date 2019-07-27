import React from "react";
import Modal from "../../../components/common/modal";

const DeleteModal = props => {
	return (
		<Modal
			isOpen={props.isOpen}
			onRequestClose={props.onRequestClose}
			contentLabel="Delete Message Modal"
			className="rm-dialog__content"
			overlayClassName="rm-dialog"
			onClick={props.onClick}
			onConfirm={props.onConfirm}
			onConfirmText="Delete"
			onConfirmClassNames="btn btn-semantic rm-button rm-button--medium rm-dialog__go"
			onCancel={props.onCancel}
			onCancelClassNames="btn btn-semantic7 rm-button rm-button--medium rm-dialog__cancel"
			onCancelText="Cancel"
			modalTitle="Delete user hobby"
			modalHeader="Are you sure you want to delete this hobby?"
		>
			<div className="message-item">
				<div className="msg">
					<div className="row d-flex">
						<div className="users delete-modal">
							<div className="user-hobbies delete-modal">
								<header>
									<div className="row">
										<div className="col theader">Passion</div>
										<div className="col theader">Hobby</div>
										<div className="col theader">Since</div>
									</div>
								</header>
								<div className="hobbies-body">
									<div className="row">
										<div className="col tbody">
											{props.hobbyToDelete.passionLevel}
										</div>
										<div className="col tbody">
											{props.hobbyToDelete.hobbyTitle}
										</div>
										<div className="col tbody">{props.hobbyToDelete.since}</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default DeleteModal;
