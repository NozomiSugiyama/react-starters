import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from "@material-ui/core";
import React from "react";
import ImageInput, { ImageInputProps } from "src/components/atoms/ImageInput";

export interface ImageInpuDialogProps extends ImageInputProps {
    open: boolean;
    onClose: () => void;
}

export default (
    {
        onClose,
        open = false,
        ...props
    }: ImageInpuDialogProps
) => (
    <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-slide-title"
    >
        <DialogTitle
            id="editable-avatar-dialog-title"
        >
            Upload Image
        </DialogTitle>
        <DialogContent>
            <ImageInput
                name="newImage"
                width="256"
                height="256"
                {...props}
            />
        </DialogContent>
        <DialogActions>
            <Button
                onClick={onClose}
            >
                cancel
            </Button>
            <Button
                component="button"
                color="primary"
            >
                Submit
            </Button>
        </DialogActions>
    </Dialog>
);
