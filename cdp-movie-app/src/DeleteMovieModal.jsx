import React from "react";

const DeleteMovieModal = ({ onClose, onConfirm }) => {
	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
			<div className="bg-white rounded-lg p-6 max-w-md w-full shadow-xl">
				<h2 className="text-xl font-bold mb-4">DELETE MOVIE</h2>
				<p className="mb-6">Are you sure you want to delete this movie?</p>

				<div className="mb-4">
					<h3 className="font-semibold mb-2">Options</h3>
					<ul className="space-y-2">
						{["React", "Cluster", "Stream"].map((option) => (
							<li key={option} className="flex items-center">
								<input
									type="checkbox"
									id={option}
									className="mr-2 h-4 w-4"
								/>
								<label htmlFor={option}>{option}</label>
							</li>
						))}
					</ul>
				</div>

				<div className="flex justify-end space-x-3">
					<button
						onClick={onClose}
						className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50"
					>
						Cancel
					</button>
					<button
						onClick={onConfirm}
						className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
					>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
};

export default DeleteMovieModal;