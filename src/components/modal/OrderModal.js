import style from "./oredr-modal.module.css"
import trash from "../../assets/trash.svg"
import plus from "../../assets/plus.svg"
import dash from "../../assets/dash.svg"
import { useDispatch, useSelector } from 'react-redux'
import { addOrder } from "../../redux/reduser/Reduser"

const OrderModal = () => {
  const {order} = useSelector(state => state)
  const dispatch = useDispatch()

  const totalPrice = order.reduce(
    (accumulator, currentValue) => accumulator + (currentValue.price.slice(1) * currentValue.quantiti),
    0
  )

  const changeOredr = (obj) => {
    const newOrders = order.map(el => {
      if(el.id === obj.id) {
        return {
          ...el,
          quantiti: obj.type === "plus" ? el.quantiti + 1 : el.quantiti < 2 ? 1: el.quantiti - 1
        }
      }
      return el
    })

    dispatch(addOrder(newOrders))
  }

  const removeOrder = (id) => {
    const filteredOrders = order.filter(el => el.id !== id)

    dispatch(addOrder(filteredOrders))
  }

  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <ul className={style.order_list}>
              {
                order.map((el,i) => (
                  <li className={style.order_item} key={el.id}>
                    <div className={style.item_start}>
                        <span className={style.item_id}>{i + 1}</span>
                        <span>{el.title}</span>
                    </div>

                    <div className={style.item_end}>
                        <span>${el.quantiti * el.price.slice(1)}</span>

                        <button className={style.btn} onClick={() => changeOredr({id:el.id, type: "plus"})}>
                          <img src={plus} alt="Plus order" />
                        </button>

                        <span>{el.quantiti}</span>

                        <button className={style.btn} onClick={() => changeOredr({id:el.id, type: "dash"})}>
                          <img src={dash} alt="Dash order" />
                        </button>
                        
                        <button className={style.btn} onClick={() => removeOrder(el.id)}>
                          <img src={trash} alt="Delet order" />
                        </button>
                    </div>
                  </li>
                ))
              }

            </ul>

            <p className={style.total_price}>
              Total price: 
              <strong className={style.total_price_strong}> ${totalPrice}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderModal