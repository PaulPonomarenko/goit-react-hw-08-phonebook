import css from './page.module.css';

export default function Home() {
  return (
    <div>
      <h1 className={css.welcome}>Welcome to the phonebook</h1>
      <h2 className={css.wizard}>
        The styles of this website were stolen by an evil wizard.It's
        temporary...
      </h2>
    </div>
  );
}
