import TogglableDescription from "./description.jsx";

export default function InfoCard({ assignments }) {
    return (
        <section>
            {assignments.map((assignment) => (
                <div key={assignment.id}>
                    <h3>{assignment.title}</h3>
                    <TogglableDescription description={assignment.description}/>
                </div>

            ))}
        </section>
    );
}