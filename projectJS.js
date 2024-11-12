// Function to validate email
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to generate and display meal plan in a pop-up
function generateMealPlan() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const goal = document.getElementById("goal").value;

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Collect meal plan data
    const mealPlan = {
        Monday: {
            Breakfast: document.getElementById("mondayBreakfast").value,
            Snack: document.getElementById("mondaySnack").value,
            Lunch: document.getElementById("mondayLunch").value,
            SecondSnack: document.getElementById("mondaySecondSnack").value,
            Dinner: document.getElementById("mondayDinner").value
        },
        Tuesday: {
            Breakfast: document.getElementById("tuesdayBreakfast").value,
            Snack: document.getElementById("tuesdaySnack").value,
            Lunch: document.getElementById("tuesdayLunch").value,
            SecondSnack: document.getElementById("tuesdaySecondSnack").value,
            Dinner: document.getElementById("tuesdayDinner").value
        },
        Wednesday: {
            Breakfast: document.getElementById("tuesdayBreakfast").value,
            Snack: document.getElementById("tuesdaySnack").value,
            Lunch: document.getElementById("tuesdayLunch").value,
            SecondSnack: document.getElementById("tuesdaySecondSnack").value,
            Dinner: document.getElementById("tuesdayDinner").value
        },
        Thursday: {
            Breakfast: document.getElementById("tuesdayBreakfast").value,
            Snack: document.getElementById("tuesdaySnack").value,
            Lunch: document.getElementById("tuesdayLunch").value,
            SecondSnack: document.getElementById("tuesdaySecondSnack").value,
            Dinner: document.getElementById("tuesdayDinner").value
        },
        Friday: {
            Breakfast: document.getElementById("tuesdayBreakfast").value,
            Snack: document.getElementById("tuesdaySnack").value,
            Lunch: document.getElementById("tuesdayLunch").value,
            SecondSnack: document.getElementById("tuesdaySecondSnack").value,
            Dinner: document.getElementById("tuesdayDinner").value
        },
        Saturday: {
            Breakfast: document.getElementById("tuesdayBreakfast").value,
            Snack: document.getElementById("tuesdaySnack").value,
            Lunch: document.getElementById("tuesdayLunch").value,
            SecondSnack: document.getElementById("tuesdaySecondSnack").value,
            Dinner: document.getElementById("tuesdayDinner").value
        },
        Sunday: {
            Breakfast: document.getElementById("tuesdayBreakfast").value,
            Snack: document.getElementById("tuesdaySnack").value,
            Lunch: document.getElementById("tuesdayLunch").value,
            SecondSnack: document.getElementById("tuesdaySecondSnack").value,
            Dinner: document.getElementById("tuesdayDinner").value
        }
    };

    // Create HTML content for html on-the-fly
    let mealPlanContent = `
        <html>
        <head><title>Weekly Meal Plan</title></head>
        <body style="font-family: Arial, sans-serif;">
            <h2>Weekly Meal Plan for ${name}</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Goal:</strong> ${goal}</p>
            <hr>
            <h3>Meals</h3>`;

    for (const [day, meals] of Object.entries(mealPlan)) {
        mealPlanContent += `<h4>${day}</h4>`;
        for (const [mealType, meal] of Object.entries(meals)) {
            mealPlanContent += `<p><strong>${mealType}:</strong> ${meal}</p>`;
        }
    }

    mealPlanContent += `
            <button onclick="window.print()">Print</button>
            <button onclick="downloadMealPlan()">Download</button>
            <script>
                function downloadMealPlan() {
                    const text = \`${mealPlanContent.replace(/<[^>]+>/g, '')}\`; // Clean HTML tags for plain text download
                    const blob = new Blob([text], { type: "text/plain" });
                    const link = document.createElement("a");
                    link.href = URL.createObjectURL(blob);
                    link.download = "meal_plan.txt";
                    link.click();
                }
            </script>
        </body>
        </html>`;

    // Open pop-up window and write the content
    const popUp = window.open("", "MealPlanPopUp", "width=600,height=800");
    popUp.document.write(mealPlanContent);
    popUp.document.close();
}
