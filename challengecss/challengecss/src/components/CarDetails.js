import styles from "./CarDetails.module.css"

const CarDetails = ({ car }) => {

  return (
    <div>
        <div className={styles.card}>
            <h2>{ car.name }</h2>
            <p>KM: { car.km }</p>
            <p>Cor { car.color }</p>
        </div>
    </div>
  )

}

export default CarDetails