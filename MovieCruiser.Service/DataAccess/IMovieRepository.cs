﻿using MovieCruiser.Service.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieCruiser.Service.DataAccess
{
    public interface IMovieRepository
    {
        List<Movie> GetAllMovies();
    }
}
