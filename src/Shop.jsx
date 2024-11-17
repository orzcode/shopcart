import { useState } from 'react'
import ItemCard from './ItemCard'

import styles from './Shop.module.css'

function Shop() {

	return (
		<div className={styles.Shop}>
		<h2>Shop</h2>
		<div className={styles.ShopCards}>
		<ItemCard />
		<ItemCard />
		

		</div>
		</div>
	)
}

export default Shop