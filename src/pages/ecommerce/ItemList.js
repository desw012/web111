import {Card, Col, Row} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {useQuery} from "react-query";
import ItemCard from "../../components/atomic/organisms/ItemCard";
import {Mock_Items} from "../../mock/Items";

const ItemList = () => {
    const dispatch = useDispatch();

    const { isLoading, isError, data, error } = useQuery("items", ()=>{ return Mock_Items }, {
    });

    if (isLoading) {
        return <span>Loading...</span>;
    }

    if (isError) {
        return <span>Error: {error.message}</span>;
    }


    return (
        <Row xs={1} md={4}  className="g-4">
            { data.items.map((item, idx) => (
                <Col>
                    <ItemCard id="P-0001"/>
                </Col>
            ))}
        </Row>
    )
}


export default ItemList;