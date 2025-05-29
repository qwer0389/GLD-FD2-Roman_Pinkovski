import React, {useState} from "react";
import MovieSearch from "./MovieSearch";
import DeleteMovieModal from "./DeleteMovieModal";

const App = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Главный экран */}
			<MovieSearch onDeleteClick={() => setIsModalOpen(true)} />

			{/* Модальное окно (появляется при isModalOpen = true) */}
			{isModalOpen && (
				<DeleteMovieModal
					onClose={() => setIsModalOpen(false)}
					onConfirm={() => {
						alert("Movie deleted!"); // Замените на реальный API-запрос
						setIsModalOpen(false);
					}}
				/>
			)}
		</div>
	);
};

export default App;