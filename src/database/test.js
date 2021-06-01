const Database = require ('./db');
const saveOrphanage = require ('./saveOrphanage');

Database.then(async (db) => {

    // insert data into the table
    await saveOrphanage(db, {
        lat: "-20.1486953",
        lng: "-44.8961689",
        name: "Lar dos Meninos",
        about: "Presta asssistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "37991300752",
        images: [
        "https://images.unsplash.com/photo-1576043061888-8751653f46af?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        "https://images.unsplash.com/photo-1594753154778-273013529793?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até as 8h",
        open_on_weekends: "1"
    })
    // // query data in the table
        const selectedOrphanages = await db.all("SELECT * FROM orphanages")
        console.log(selectedOrphanages)

    // //  query only one orphanage from id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    console.log(orphanage)

    // // delete data from table
    // await db.run("DELETE FROM orphanages")
})
