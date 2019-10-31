import React, { Component } from 'react'
import PropTypes  from 'prop-types'
import { GridList, GridListTile  } from '@material-ui/core'
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

export default class ImageResults extends Component {

    state = {
        open: false,
        currentImg: ''
    }

    handleOpen = img => {
        this.setState({ open: true, currentImg: img })
    }

    handleClose = () => {
        this.setState({ open: false})
    }

    render() {
        let imageListContent;
        const { images } = this.props

        if (images) {
            imageListContent = (
                <GridList cols={3}>
                    {images.map(img => (
                        <GridListTile
                            key={img.id}
                        >
                            <img src={img.largeImageURL} alt="Image"/>
                            <GridListTileBar 
                                title={img.tags}
                                subtitle={
                                    <span>
                                        by <strong>{img.user}</strong>
                                    </span>
                                }
                                actionIcon={
                                    <IconButton onClick={() => this.handleOpen(img.largeImageURL)}>
                                        <ZoomInIcon color="primary"/>
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    ))}
                </GridList>
            )
        } else {
            imageListContent = null
        }

        const actions = [
            <Button color="primary" onClick={this.handleClose}>
                Close
            </Button>
        ]

        return (
            <div>
                {imageListContent}
                <Dialog 
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >   
                    <DialogContent>
                        <img src={this.state.currentImg} style={{ width: '100%' }} />
                    </DialogContent>
                    <DialogActions>
                        {actions}
                    </DialogActions>
                </Dialog>

            </div>
        )
    }
}

ImageResults.propTypes  = {
    images: PropTypes.array.isRequired
}
