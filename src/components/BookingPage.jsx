import "./BookingPage.css";

export default function BookingPage() {
  return (
    <>
      <div className="bookingpage">
        <div className="bookingpage-title">
          <h1>Booking a Table</h1>
        </div>
        <div className="bookingform">
          <form>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time ">
              <option>17:00</option>
              <option>18:00</option>
              <option>19:00</option>
              <option>20:00</option>
              <option>21:00</option>
              <option>22:00</option>
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion">
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
          </form>
        </div>
      </div>
    </>
  );
}
