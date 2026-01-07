import GameForm from '../GameForm';
import styles from '../form.module.css';

export default function NewGamePage() {
    return (
        <div className={styles.formPage}>
            <h1 className={styles.pageTitle}>Add New Game</h1>
            <GameForm mode="create" />
        </div>
    );
}
