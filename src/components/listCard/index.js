import React, { Fragment } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


export default function RecipeReviewCard({ info }) {




    return (
        <div>
            {
                info && info.map((e) => (
                    <div style={{ padding: '10px 0px' }}>
                        <Card >
                            <CardHeader

                                avatar={
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                        {e.id.split("")[0]}
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title={e.id}
                                subheader={`Fecha de creación: ${e.created_at}`}
                            />

                            <CardContent>
                                <Typography style={{ padding: '10px 0px' }} variant="body2" color="text.secondary">
                                    {`Fecha de actualización: ${e.updated_at}`}
                                </Typography>
                                <Typography style={{ padding: '10px 0px' }} variant="body2" color="text.secondary">
                                    {`URL: ${e.url}`}
                                </Typography>
                                <Typography style={{ padding: '10px 0px' }} variant="body2" color="text.secondary">
                                    {`VALOR: ${e.value}`}
                                </Typography>
                                <Typography style={{ padding: '10px 0px' }} variant="body2" color="text.secondary">
                                    {`CATEGORIA: ${(e.categoria || "NO TIENE")}`}
                                </Typography>

                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </div>
                ))
            }
        </div>
    );
}