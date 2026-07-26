import React from "react";

export default function CreateTicket() {
  return (
    <div className="container">
      <div className="row">
        {/* left section */}
        <div className="col-8"></div>
        <div class="input-group flex-nowrap mt-5 pt-1">
          <span class="input-group-text border" id="addon-wrapping">
            <i class="fa-solid fa-circle-plus"></i>
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          ></input>
        </div>

        <div class="input-group flex-nowrap mt-3">
          <span class="input-group-text" id="addon-wrapping">
            <i class="fa-regular fa-circle-user"></i>
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          ></input>
        </div>

        <div class="input-group flex-nowrap mt-3">
          <span class="input-group-text" id="addon-wrapping">
            <i class="fa-brands fa-xing"></i>
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          ></input>
        </div>

        <div class="input-group flex-nowrap mt-3">
          <span class="input-group-text" id="addon-wrapping">
            <i class="fa-solid fa-indian-rupee-sign"></i>
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          ></input>
        </div>

        <div class="input-group flex-nowrap mt-3">
          <span class="input-group-text" id="addon-wrapping">
            <i class="fa-solid fa-palette"></i>
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          ></input>
        </div>

        <div class="input-group flex-nowrap mt-3">
          <span class="input-group-text" id="addon-wrapping">
            <i class="fa-solid fa-coins"></i>
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          ></input>
        </div>

        {/* right section */}
        <div className="col-4"></div>
      </div>
    </div>
  );
}
