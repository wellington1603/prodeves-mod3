import React from "react";
import styles from './card.module.scss'
import { Card } from 'antd';

const CardComponent = () => {
    const { Meta } = Card;
    return(
        <div className={styles.card}> 
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://a-static.mlcdn.com.br/618x463/smartphone-samsung-galaxy-s20-fe-128gb-cloud-mint-4g-6gb-ram-tela-65-cam-tripla-selfie-32mp/magazineluiza/155630400/5f2870ff3ce9ab58274fe9df33ec846b.jpg" />}
            >
                <div>Smartphone Samsung Galaxy S20 FE 128GB Cloud Mint</div>
                <p>de R$4.999,00 por</p>
                <p>R$ 1.799,00</p>
                <p>ou R$ 1.998,89</p>
                <p>10x de R$ 199,89 sem juros</p>
            </Card>
        </div>
    )
}

export default CardComponent