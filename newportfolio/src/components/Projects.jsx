const Projects=()=>(
    <section className="container p-10 gb-grep-100 text-center" id="projects">
        <div className="box">
            <h2 className="text-3xl font-bold mb-4">
                Projects
            </h2>
        <div className="grid gap-4 sm:grid-cols-2">
            {/*project-1*/}
            <div className="p-4 bg-white shadow rounded">
                <h3 className="font-semibold">Project-1</h3>
                <p>Ecommerce Flipkart does online shoping & delivery of products</p>
            </div>

            {/*project-2*/}
            <div className="p-4 bg-white shadow rounded">
                <h3 className="font-semibold">Project-1</h3>
                <p>Elibrary does online issueing and reading </p>
            </div>

            {/*project-3*/}
            <div className="p-4 bg-white shadow rounded">
                <h3 className="font-semibold">Project-1</h3>
                <p>does online adopting of pets</p>
            </div>


        </div>

        </div>
    </section>
)
export default Projects;