import ImagePicker from "@/src/components/meals/ImagePicker";

export default function ShareMealPage() {
  return (
    <>
      <header className="share-header">
        <h1>
          Share your <span className="share-highlight">favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className="share-main">
        <form className="share-form">
          <div className="share-row">
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows={10}
              required
            ></textarea>
          </p>
          <ImagePicker />
          <p className="share-actions">
            <button type="button">Share Meal</button>
          </p>
        </form>
      </main>
    </>
  );
}
