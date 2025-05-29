import React from "react";

const MovieSearch = ({ onDeleteClick }) => {
	return (
		<div className="p-8 max-w-4xl mx-auto">
			<h1 className="text-3xl font-bold mb-6">FIND YOUR MOVIE</h1>

			<div className="bg-gray-100 p-6 rounded-lg mb-6">
				<p className="text-gray-700 whitespace-pre-line">
					MIT A BIG GODS DOES MEET GOOD HOW YOU WANT TO GET TOTAL AND BE LESS ON
					THE DECISION OF THINGS I REALLY NOT EVEN NIGHT NOW.
				</p>
			</div>

			<button
				onClick={onDeleteClick}
				className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
			>
				Delete Movie
			</button>
		</div>
	);
};

export default MovieSearch;