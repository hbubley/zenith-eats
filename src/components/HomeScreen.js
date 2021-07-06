import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    Button,
    Container,
    Card,
    CardContent,
    makeStyles,
    Chip,
} from "@material-ui/core";
import { find, startCase, sumBy } from "lodash";

const useStyles = makeStyles({
    card: {
        width: 150,
        margin: 10,
    },
    cardSelected: {
        width: 150,
        margin: 10,
        backgroundColor: "#4EBF7C",
        color: "white",
    },
    home: {
        backgroundColor: "rgb(40, 40, 40)",
        padding: 20,
        borderRadius: 5,
    },
    flexBetween: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
    },
    subtext: {
        color: "#ffffff",
        fontStyle: "italic",
    },
    statusBadge: {
        borderColor: "green",
        borderWidth: "1px",
    },
    statusBadgeContainer: {
        textAlign: "left",
    },
    text: {
        color: "white",
    },
    orderButton: {
        borderColor: "white",
        color: "white",
    },
});

const HomeScreen = () => {
    const classes = useStyles();
    const [cart, setCart] = useState([]);
    const [menu, setMenu] = useState([
        { item: "soup", cost: 100 },
        { item: "ramen", cost: 100 },
        { item: "chips", cost: 10 },
        { item: "chicken_nuggets", cost: 50 },
    ]);

    const handleAddToCart = (item) => {
        const updatedCart = [...cart];
        if (find(updatedCart, (c) => c.item === item.item)) {
            const newCart = updatedCart.filter((c) => c.item !== item.item);
            setCart(newCart);
        } else {
            updatedCart.push(item);
            setCart(updatedCart);
        }
    };
    return (
        <Container className={classes.home}>
            <p className="header-text">Welcome to Zenith Eats</p>
            <p className={classes.subtext}>We put the 'fun' in no refunds!</p>
            <div className={classes.statusBadgeContainer}>
                <Chip
                    className={classes.statusBadge}
                    label="We are currently: Open"
                />
            </div>

            <div>
                <p className={classes.text}>
                    Please select what you would like from the menu:
                </p>
                <div className="menu">
                    {menu.map((i) => {
                        return (
                            <Card
                                className={
                                    find(cart, (c) => c.item === i.item)
                                        ? classes.cardSelected
                                        : classes.card
                                }
                                onClick={() => handleAddToCart(i)}
                            >
                                <CardContent>
                                    <p>{startCase(i.item)}</p>
                                    <p>{startCase(i.cost)} Gold</p>
                                </CardContent>
                                {find(cart, (c) => c.item === i.item) && (
                                    <i class="fa-solid fa-cart-shopping"></i>
                                )}
                            </Card>
                        );
                    })}
                </div>

                <div className="order-details">
                    <p className={classes.text}>
                        Total: {sumBy(cart, (c) => c.cost)}
                    </p>

                    <Button variant="outlined" className={classes.orderButton}>
                        Place your order
                    </Button>
                </div>
            </div>
        </Container>
    );
};

export default HomeScreen;
