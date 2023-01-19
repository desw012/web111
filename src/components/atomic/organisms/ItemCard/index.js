
import style from './index.module.css';
import {Card} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {addToWishList, removeFromWishList} from "../../../../store/slices/WishListSlice";
import {useCallback} from "react";

export default (props) => {
    const dispatch = useDispatch();

    const id = props.id;
    const isWishList = useSelector(state => state.wishlist.items_ids[id]);

    const wishListBtnHandler = useCallback(()=>{
        if(isWishList){
            dispatch(removeFromWishList(id));
        } else {
            dispatch(addToWishList(id));
        }
    }, [id, isWishList]);

    return (
        <Card >
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                </Card.Text>
            </Card.Body>

            <button className={`${style.btnStar} ${ isWishList && style.active}` } onClick={wishListBtnHandler}/>
        </Card>
    )
}