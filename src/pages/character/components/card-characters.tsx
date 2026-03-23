import { Card, CardContent, CardMedia, Typography } from "@mui/material";

import * as motion from "motion/react-client";
import type { ICharacter } from "../interfaces/rick-and-morty-interface";

export const CharacterCard = ({ character }: { character: ICharacter }) => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Card sx={{ width: 260 }}>
        <CardMedia
          component="image"
          sx={{ height: 180, width: 260 }}
          height={180}
          width={290}
          image={character.image}
          name={character.name}
        />
        <CardContent>
          <Typography variant="h6">
            {character.name.substring(0, 12)}...
          </Typography>
          <Typography variant="body2">
            <Typography variant="caption">
              Status: {character.status}
            </Typography>
            <Typography variant="caption">
              Species: {character.species}
            </Typography>
            <Typography variant="caption">
              Gender: {character.gender}
            </Typography>
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};
