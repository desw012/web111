import {Card, Col, Row} from "react-bootstrap";
import {useQuery} from "react-query";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import ItemCard from "../../components/atomic/organisms/ItemCard";

const CartList = () => {
    const cart = useSelector(state => state.cart);

    useEffect(()=>{

    });

    return (
        <Row xs={1} md={4}  className="g-4">
            {cart.items.map((_, idx) => (
                <Col>
                    <ItemCard/>
                </Col>
            ))}
        </Row>
    )
}

export default CartList;