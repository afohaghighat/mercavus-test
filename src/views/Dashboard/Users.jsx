import React, { Component } from "react";
import { connect } from "react-redux";
import UsersForm from "./UsersForm";
import HobbiesForm from "./HobbiesForm";
import ListGroup from "../../components/common/listGroup";
import DeleteModal from "./Partials/DeleteModal";
import DeleteButton from "./Partials/DeleteButton";
import {
	getUsers,
	createUser,
	getUserHobbies,
	addUserHobby,
	deleteUserHobby
} from "./../../services/UsersService";

class Users extends Component {
	state = {
		selectedUser: {},
		modals: {
			deleteModal: false
		},
		hobbyToDelete: {}
	};

	componentDidMount() {
		this.props.getUsers();
	}

	handleSelectUser = user => {
		this.props.getUserHobbies(user._id);
		this.setState({ selectedUser: user });
	};

	handleDeleteUserHobby = () => {
		this.props.deleteUserHobby(this.state.hobbyToDelete);
		this.handleCloseDeleteModal();
	};

	handleOpenDeleteModal = hobby => {
		const data = {
			_id: hobby._id,
			passionLevel: hobby.passionLevel,
			hobbyTitle: hobby.hobbyTitle,
			since: hobby.since
		};

		this.setState({
			modals: { deleteModal: true },
			hobbyToDelete: data
		});
	};

	handleCloseDeleteModal = () => {
		this.setState({ modals: { deleteModal: false } });
	};

	handleReturnToUsers = () => {
		this.setState({ selectedUser: {} });
	};

	render() {
		const { users, hobbies } = this.props;
		const { selectedUser } = this.state;

		const passionLevels = {
			1: "Low",
			2: "Medium",
			3: "High",
			4: "Very-High"
		};

		return (
			<section className="users">
				<div className="container">
					<div className="table-container d-flex">
						<div className="row">
							<div
								className={`col col-md-3 col-sm-6 col-xs-12 users-section ${
									Object.getOwnPropertyNames(selectedUser).length !== 0
										? "out"
										: "in"
								}`}
							>
								<UsersForm {...this.props} />
								<div className="scroll-users">
									{users && (
										<ListGroup
											items={users.sort((a, b) => b._id - a._id)}
											onItemSelect={this.handleSelectUser}
											selectedItem={selectedUser}
										/>
									)}
								</div>
							</div>
							<div
								className={`col col-md-9 col-sm-6 col-xs-12 hobbies-section ${
									Object.getOwnPropertyNames(selectedUser).length !== 0
										? "in"
										: "out"
								}`}
							>
								{selectedUser &&
								Object.getOwnPropertyNames(selectedUser).length !== 0 ? (
									<div className="user-hobbies">
										<header>
											<div className="row">
												<div className="col theader">Passion</div>
												<div className="col theader">Hobby</div>
												<div className="col theader">Since</div>
												<div className="col theader actionsHeader" />
											</div>
										</header>
										<div className="hobbies-body">
											<HobbiesForm
												user={this.state.selectedUser}
												returnToUsers={this.handleReturnToUsers}
												{...this.props}
											/>
											<div className="scroll-hobbies">
												{hobbies &&
													hobbies.length > 0 &&
													hobbies
														.sort((a, b) => b._id - a._id)
														.map(item => (
															<div key={item._id} className="row hobby-row">
																<div className="col tbody">
																	<div className="label">Passion</div>
																	<div className="data">
																		{passionLevels[item.passionLevel]}
																	</div>
																</div>
																<div className="col tbody">
																	<div className="label">Hobby</div>
																	<div className="data">{item.hobbyTitle}</div>
																</div>
																<div className="col tbody">
																	<div className="label">Since</div>
																	<div className="data">{item.since}</div>
																</div>
																<div className="col tbody actionsBody delete-icon">
																	<DeleteButton
																		onClick={() =>
																			this.handleOpenDeleteModal(item)
																		}
																	/>
																</div>
															</div>
														))}
											</div>
										</div>
									</div>
								) : (
									<div className="user-not-selected" />
								)}
							</div>
						</div>
					</div>
				</div>
				<DeleteModal
					isOpen={this.state.modals.deleteModal}
					onRequestClose={this.handleCloseDeleteModal}
					onClick={this.handleCloseDeleteModal}
					onConfirm={this.handleDeleteUserHobby}
					onCancel={this.handleCloseDeleteModal}
					{...this.state}
				/>
			</section>
		);
	}
}

const mapStateToProps = state => {
	return {
		users: state.usersData.users,
		hobbies: state.usersData.hobbies
	};
};

export default connect(
	mapStateToProps,
	{ getUsers, createUser, getUserHobbies, addUserHobby, deleteUserHobby }
)(Users);
