import { makeStyles, Modal, TextField, Button } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: 300,
    },
    paper: {
        backgroundColor: "#ffffff",
        width: 400,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    formField: {
        margin: 10,
    },
}));
const OrderModal = ({ open, toggleOpen }) => {
    const classes = useStyles();
    return (
        <div>
            <Modal open={open} onClose={toggleOpen} className={classes.modal}>
                <div className={classes.paper}>
                    <form>
                        <p>Thank you for choosing Zenith Eats</p>
                        <TextField
                            id="standard-basic"
                            label="Username"
                            className={classes.formField}
                        />
                        <TextField
                            id="standard-basic"
                            label="Location"
                            className={classes.formField}
                        />
                    </form>
                    <p className={classes.formField}>CAPTCHA WILL GO HERE</p>
                    <Button className={classes.formField} variant={"outlined"}>
                        Submit
                    </Button>
                </div>
            </Modal>
        </div>
    );
};

export default OrderModal;
