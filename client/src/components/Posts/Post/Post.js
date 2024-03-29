import React, { useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpOffAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './styles';
import { useDispatch } from 'react-redux';

import { deletePost, likePost } from '../../../actions/posts';
import { useHistory } from 'react-router-dom';

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('profile'));
    const [likes, setLikes] = useState(post?.likes);

    const userId = user?.result?._id;
    const hasLikedPost = likes.find((like) => like === user?.result?._id);

    const handleLike = async () => {
        dispatch(likePost(post._id));

        if(hasLikedPost) {
            setLikes(likes.filter((id) => id !== userId))
        } else {
            setLikes([ ...likes, userId])
        }
    };

    const Likes = () => {
        if(likes.length > 0) {
            return likes.find((like) => like === user?.result?._id) 
            ? (
                <><ThumbUpAltIcon fontSize="small" sx={{color: 'pink'}}/>&nbsp;{likes.length > 2 ? `${likes.length - 1}` : `${likes.length}` }</>
            ) : (
                <><ThumbUpOffAltOutlined fontSize="small" sx={{color: 'pink'}}/>&nbsp;{likes.length} </>
            );
        }

        return <><ThumbUpOffAltOutlined fontSize="large" sx={{color: 'pink'}}/></>;
    };

    const openPost = () => history.push(`/posts/${post._id}`)

    return (
        <Card className={classes.card} raised elavation={6}>
                <div className={classes.overlay}>
                    <Typography style={{fontSize: '16px'}}>{post.name}</Typography>
                    <Typography style={{fontSize: '10px'}}>{moment(post.createdAt).fromNow()}</Typography>
                </div>
                <div className={classes.overlay2}>
                    <Button style={{color: 'white'}} size="small" onClick={() => setCurrentId(post._id)}>
                        <MoreHorizIcon fontSize="medium" />
                    </Button>
                </div>
                <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
                <div className={classes.details}>
                    <Typography variant='body2' color='primary'>{post.tags.map((tag) => `#${tag} `)}</Typography>
                </div>
                <Typography className={classes.title} gutterBottom>{post.title}</Typography>
                {/* <CardContent>
                    <Typography variant='body2' color='textSecondary' component='p'>{post.message}</Typography>
                </CardContent> */}
            <CardActions className={classes.cardActions}>
                <Button size='small' color='primary' disabled={!user?.result} onClick={handleLike}>
                    <Likes />
                </Button>
                <Button color='primary' variant='contained' onClick={openPost}>
                    View
                </Button>
                {(user?.result?._id === post?.creator) && (
                    <Button size='small' style={{color: '#b61122'}} onClick={() => {
                        dispatch(deletePost(post._id))
                        window.location.reload()}}>
                        <DeleteIcon fontSize="small" />
                        Delete
                    </Button>
                )}
            </CardActions>
        </Card>
    );
}

export default Post;