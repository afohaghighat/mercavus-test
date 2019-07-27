import React, { Component } from "react";
import ReactModal from "react-modal";
import "../../styles/reactModal.scss";

ReactModal.setAppElement("#root");

class Modal extends Component {
	state = { delPercentage: 0 };

	render() {
		return (
			<ReactModal
				isOpen={this.props.isOpen}
				onRequestClose={this.props.onRequestClose}
				contentLabel={this.props.contentLabel}
				className={this.props.className}
				overlayClassName={this.props.overlayClassName}
			>
				<div className="rm-dialog__header" data-qa="dialog_header">
					<h3 className="rm-dialog__title overflow_ellipsis">
						{this.props.modalTitle}
					</h3>
					<button
						className="rm-button-unstyled rm-dialog__close"
						type="button"
						aria-label="Close"
						data-qa="dialog_close"
						onClick={this.props.onClick}
					>
						<i className="icon-remove-symbol" aria-hidden="true" />
					</button>
				</div>
				<div
					className="rm-dialog__body dialog__body--slack_scrollbar"
					data-qa="dialog_body"
				>
					{this.props.modalHeader}
					<div className="rm-message-wrapper">
						<div className="rm-message rm-message--light rm-message--standalone">
							{this.props.children}
							{this.props.onConfirmLongTouch && (
								<div
									className={`rm-message-overlay ${
										this.props.onConfirmLongTouchOverlay
									}`}
									style={{ width: `${this.state.delPercentage}%` }}
								>
									<i
										className={`icon ${
											this.props.onConfirmLongTouchOverlayIcon
										}`}
									/>
								</div>
							)}
						</div>
					</div>
				</div>
				<div
					className="rm-dialog__footer rm-dialog__footer--has_buttons"
					data-qa="dialog_footer"
				>
					<div className="rm-dialog__footer_buttons">
						<button
							className={this.props.onCancelClassNames}
							type="button"
							data-qa="dialog_cancel"
							onClick={this.props.onCancel}
						>
							{this.props.onCancelText}
						</button>
						<button
							className={this.props.onConfirmClassNames}
							type="button"
							data-qa="dialog_go"
							onClick={this.props.onConfirm}
						>
							{this.props.onConfirmText}
						</button>
					</div>
				</div>
			</ReactModal>
		);
	}
}

export default Modal;
