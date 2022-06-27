import { Paper, Typography, Divider } from "@material-ui/core/";
import "./movie.scss";
interface movieDesProps {
  pDes: any;
}

const MovieDescription: React.FC<movieDesProps> = ({ pDes }) => {
  const { title, image, production_companies, status, overview, budget } = pDes;

  return (
    <Paper
      style={{ padding: "20px", borderRadius: "15px", margin: "30px 10px" }}
      elevation={6}
    >
      <div className="card">
        <div className="imageSection">
          <img
            className="media"
            src={
              image ||
              "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
            }
            alt={title}
          />
        </div>
        <div className="section">
          <Typography variant="h3" component="h2">
            {title}
          </Typography>
          <Typography gutterBottom variant="body1" component="p">
            {overview}
          </Typography>
          <Typography gutterBottom variant="h4" component="p">
            Collections:
          </Typography>

          {JSON.parse(production_companies).map((pc: any, index: number) => {
            return (
              <p
                key={index}
                style={{ lineHeight: "5px", letterSpacing: "2px" }}
              >
                {pc.name}
              </p>
            );
          })}
          <Typography variant="h6">Budget: ${budget}</Typography>
          <Typography variant="h6">status: {status}.</Typography>
          <Divider style={{ margin: "20px 0" }} />
        </div>
      </div>
    </Paper>
  );
};

export default MovieDescription;
