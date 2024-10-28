import React from "react";

const Policies = () => {
  return (
    <div style={{ padding: "70px" }} id="policy">
      {/* Terms and Conditions */}
      <section>
        <div className="section-title section-title-style-2 mb-4 mb-lg-30 mb-xxl-40">
          <h3 className="sub-title display-3 fw-extra-bold primary-text-shadow custom-roboto">
            Terms and Conditions
          </h3>
        </div>
        <p>
          By purchasing a ticket for Yugam 2024, you agree to abide by all event
          policies and rules. Attendees are responsible for their belongings and
          must adhere to safety protocols. Avighna Events reserves the right to
          refuse entry or remove attendees who disrupt the event. Ticket resale
          at higher prices is prohibited. We reserve the right to make changes
          to the event schedule without prior notice.
        </p>
      </section>

      {/* Privacy Policy */}
      <section>
        <div className="section-title section-title-style-2 mb-4 mb-lg-30 mb-xxl-40">
          <h3 className="sub-title display-3 fw-extra-bold primary-text-shadow custom-roboto">
            Privacy Policy
          </h3>
        </div>
        <p>
          Avighna Events is committed to protecting your privacy. We collect
          personal information such as name, contact details, and payment
          information solely for ticketing and event-related purposes. Your data
          will not be shared with third parties, except as required by law or
          for payment processing. We use industry-standard security measures to
          protect your information. By using our services, you consent to our
          data practices as outlined in this policy.
        </p>
      </section>

      {/* Cancellation Policy */}
      <section>
        <div className="section-title section-title-style-2 mb-4 mb-lg-30 mb-xxl-40">
          <h3 className="sub-title display-3 fw-extra-bold primary-text-shadow custom-roboto">
            Cancellation Policy
          </h3>
        </div>
        <p>
          All ticket sales for Yugam 2024 are final, and cancellations will not
          be eligible for a refund. In the unlikely event that Avighna Events
          cancels the event, attendees will be notified and provided with
          options for rescheduling or a refund. Please check our website or
          official communication channels for updates.
        </p>
      </section>

      {/* Reschedule Policy */}
      <section>
        <div className="section-title section-title-style-2 mb-4 mb-lg-30 mb-xxl-40">
          <h3 className="sub-title display-3 fw-extra-bold primary-text-shadow custom-roboto">
            Reschedule Policy
          </h3>
        </div>

        <p>
          If Yugam 2024 needs to be rescheduled due to unforeseen circumstances,
          all tickets will remain valid for the new date. Attendees will be
          notified of any changes in advance via email and official event
          channels. No refunds will be issued for rescheduling, but we will do
          our best to ensure a seamless experience for all attendees.
        </p>
      </section>
    </div>
  );
};

export default Policies;
