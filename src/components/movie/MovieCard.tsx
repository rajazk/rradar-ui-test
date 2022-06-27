import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownOutlinedIcon from "@material-ui/icons/ThumbDownOutlined";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import { useNavigate } from "react-router-dom";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Movie } from "./types";

interface MovieProps {
  movie: Movie;
  handleLike: (data: any, value: string) => void;
}

const MovieCard: React.FC<MovieProps> = ({ movie, handleLike }) => {
  const navigate = useNavigate();

  const handleCard = (movie: Object) => {
    navigate("/movie", { state: { movie: movie } });
  };

  return (
    <Card sx={{ maxWidth: 345 }} className="product-card">
      <CardActionArea onClick={() => handleCard(movie)}>
        <CardMedia
          className="fashion-img"
          component="img"
          height="fit-content"
          image={movie.image}
          alt="green iguana"
        />
        <CardContent>
          <div className="product-cost">
            <Typography
              gutterBottom
              variant="inherit"
              component="div"
              className="product-name"
            >
              {movie.title}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              className="product-name"
            >
              {movie.release_date}
            </Typography>
          </div>
          <Typography
            variant="h6"
            color="text.secondary"
            className="product-name"
            align="justify"
          >
            ${movie.budget}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className="product-name"
            align="justify"
          >
            {movie.overview}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="card-action">
        <Button
          size="small"
          color="primary"
          onClick={() => handleLike(movie, "like")}
        >
          {movie.like ? (
            <ThumbUpAltIcon fontSize="small" />
          ) : (
            <ThumbUpOutlinedIcon fontSize="small" />
          )}
          &nbsp; {movie.like ? "Liked" : "Like"}
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => handleLike(movie, "dislike")}
        >
          {movie.dislike ? (
            <ThumbDownAltIcon fontSize="small" />
          ) : (
            <ThumbDownOutlinedIcon fontSize="small" />
          )}
          &nbsp; {movie.dislike ? "Disliked" : "Dislike"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
