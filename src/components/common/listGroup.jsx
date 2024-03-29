import React from "react";

const ListGroup = ({
	items,
	textProperty,
	valueProperty,
	onItemSelect,
	selectedItem
}) => {
	return (
		<ul className="list-group">
			{items.map(item => (
				<li
					key={item[valueProperty]}
					className={
						item === selectedItem
							? "list-group-item active"
							: "list-group-item clickable"
					}
					onClick={() => onItemSelect(item)}
				>
					{item[textProperty]}
				</li>
			))}
		</ul>
	);
};

ListGroup.defaultProps = {
	textProperty: "name",
	valueProperty: "_id"
};

export default ListGroup;
