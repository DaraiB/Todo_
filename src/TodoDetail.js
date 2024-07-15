import { useParams} from 'react-router-dom';

export default function TodoDetail (props) {
    const { key } = useParams();
    const deed = props.getDeed(key);
    
    // console.log(key);

    return (
        
        <section>
            {deed.done &&
                <p className="has-text-success">
                    ВЫПОЛНЕНО
                </p>
                }
            <h1> {deed.title} </h1>
            <p>{deed.createdAt}</p>
            {deed.desc && <p>{deed.desc}</p>}
            {deed.image && <p><img src={deed.image} alt="Иллюстрация"/> </p>}    
        </section>
    );
}