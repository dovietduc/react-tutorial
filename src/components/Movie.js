import { useState } from 'react';
import movieList from '../service/service';

function Movie() {
    const [movies, setMovies] = useState(movieList);

    const handleDelete = (id) => {
        const movieNews = movies.filter(movie => movie.id != id);
        setMovies(movieNews);
    }

    if(movies.length == 0) {
        return (
            <h2>Không có diễn viên JAV nào để chọn</h2>
        )
    }


    return (
        <main className="container mt-4">
            <h2>Có {movies.length} diễn viên JAV</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">name</th>
                        <th scope="col">image</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map(function (movieItem) {
                        return (
                            <tr key={movieItem.id}>
                                <th scope="row">{movieItem.id}</th>
                                <td>{movieItem.name}</td>
                                <td><img src={movieItem.image} style={{width: 100}} /></td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(movieItem.id)}
                                        className="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </main>
    );
}

export default Movie;
