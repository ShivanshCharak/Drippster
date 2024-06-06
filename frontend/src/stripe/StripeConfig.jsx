import { useEffect, useState } from "react";
import { loadStripe } from '@stripe/stripe-js';

export default function StripeConfig() {
    const [stripe, setStripe] = useState(null);
    const [clientSecret, setClientSecret] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/config", {
                    method: "GET",
                });
                if (!response.ok) {
                    throw new Error("Failed to fetch Stripe config");
                }
                const data = await response.json();
                const stripeInstance = await loadStripe(data.key);
                setStripe(stripeInstance);
                console.log(stripeInstance); // Check if stripeInstance is properly loaded
            } catch (error) {
                console.error("Error fetching Stripe config:", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const createPaymentIntent = async () => {
            try {
                const response = await fetch("http://localhost:3000/create-payment-intent", {
                    method: "POST",
                    body: JSON.stringify({})
                });
                if (!response.ok) {
                    throw new Error("Failed to create payment intent");
                }
                const { clientSecret } = await response.json();
                setClientSecret(clientSecret);
                console.log(clientSecret);
            } catch (error) {
                console.error("Error creating payment intent:", error);
            }
        };

        // Run createPaymentIntent only when stripe is loaded
        if (stripe) {
            createPaymentIntent();
        }
    }, [stripe]); // Dependency array with stripe as dependency

    return (
        <>
            {stripe && (
                <div>
                    Stripe Instance Loaded
                </div>
            )}
        </>
    );
}
