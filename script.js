document.addEventListener("DOMContentLoaded", function() {
    const options = document.querySelectorAll(".option");
    const submitButton = document.getElementById("submit");
    const resultContainer = document.getElementById("result");
    const questionContainers = document.querySelectorAll(".question-container");
    const answers = {};

    options.forEach(option => {
        option.addEventListener("click", function() {
            const questionContainer = this.closest(".question-container");
            const questionIndex = Array.from(document.querySelectorAll(".question-container")).indexOf(questionContainer);

            // tira do selecionado a questão anterior
            const previouslySelected = questionContainer.querySelector(".selected");
            if (previouslySelected) {
                previouslySelected.classList.remove("selected");
            }

            // Seleciona a opção clicada
            this.classList.add("selected");

            // salva a resposta
            answers[questionIndex] = this.getAttribute("data-correspondência");

            // verifica se todas as questões foram respondidas
            if (questionIndex < questionContainers.length - 1) {
                questionContainers[questionIndex + 1].scrollIntoView({ behavior: "smooth" });
            } else {
                submitButton.style.display = "block"; // Show submit button on the last question
                submitButton.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    submitButton.addEventListener("click", function() {
        let result = calculateResult(answers);
        displayResult(result);
        resultContainer.scrollIntoView({ behavior: "smooth" });
    });

    function calculateResult(answers) {
        const count = {};

        // conta a frequencia de cada resposta
        for (let key in answers) {
            const answer = answers[key];
            if (count[answer]) {
                count[answer]++;
            } else {
                count[answer] = 1;
            }
        }

        // procura a mais respondida
        let mostFrequent = null;
        let maxCount = 0;
        for (let key in count) {
            if (count[key] > maxCount) {
                mostFrequent = key;
                maxCount = count[key];
            }
        }

        return mostFrequent;
    }

    function displayResult(result) {
        const imagens = {
            "tempo": [
                "imagens/motus3/Ama.jpg", "imagens/motus3/Ama!2.jpg", "imagens/motus3/Ama! (3).jpg",
                "imagens/motus3/Ama! (4).jpg", "imagens/motus3/Ama! (5).jpg", "imagens/motus3/Ama! (6).jpg", "imagens/motus3/Ama! (7).jpg",
                "imagens/motus3/Ama! (8).jpg", "imagens/motus3/Ama! (9).jpg", "imagens/motus3/Ama! (10).jpg", "imagens/motus3/Ama! (11).jpg",
                "imagens/motus3/Ama! (12).jpg", "imagens/motus3/Ama! (13).jpg", "imagens/motus3/Ama! (14).jpg", "imagens/motus3/Ama! (15).jpg",
                "imagens/motus3/Ama! (16).jpg", "imagens/motus3/Ama! (17).jpg", "imagens/motus3/Ama! (18).jpg", "imagens/motus3/Ama! (19).jpg",
                "imagens/motus3/Ama! (20).jpg"
            ],
            "amor": [
                "imagens/motus2/Ama.jpg", "imagens/motus2/Amorhereditário.jpg", "imagens/motus2/AmorProprio.jpg", "imagens/motus2/AmorProprio2.jpg",
                 "imagens/motus2/cancaoparaalbumdemoça.jpg", "imagens/motus2/cartaopostal.jpg", "imagens/motus2/Deixeoamoramar.jpg", "imagens/motus2/DeliciosaRedundancia.jpg",
                  "imagens/motus2/Desdesempre.jpg", "imagens/motus2/desembarquedesonhos.jpg", "imagens/motus2/desembarquedesonhos2.jpg", "imagens/motus2/Emcadenteinexpressão.jpg",
                   "imagens/motus2/Emcadenteinexpressão2.jpg", "imagens/motus2/Ghost.jpg", "imagens/motus2/Hiperbólicosdesvaneios.jpg", "imagens/motus2/illusion.jpg",
                   "imagens/motus2/illusion2.jpg", "imagens/motus2/k.jpg", "imagens/motus2/Litaniadohumanoamor.jpg", "imagens/motus2/make.jpg"
            ],
            "olhar": [
                "imagens/motus4/Acapadolivro.jpg", "imagens/motus4/Aintrusa.jpg", "imagens/motus4/Amulherpreta.jpg", "imagens/motus4/Aoolhar.jpg",
                 "imagens/motus4/Consuetudinário.jpg", "imagens/motus4/Dolixoaressurreição.jpg", "imagens/motus4/Eusouooutroemvocê.jpg", 
                 "imagens/motus4/JefersonJackson.jpg", "imagens/motus4/Meninadosolhos.jpg", "imagens/motus4/Musadepoeta.jpg", "imagens/motus4/Ocegonarciso.jpg",
                  "imagens/motus4/Ohomemquesemisturava.jpg", "imagens/motus4/Olhos.jpg", "imagens/motus4/Olhosdecabrabom.jpg", "imagens/motus4/Olhosdefome.jpg",
                   "imagens/motus4/Oolhardooutro.jpg", "imagens/motus4/PontodeVista.jpg", "imagens/motus4/SraEbenezer.jpg", "imagens/motus4/Tevejo.jpg",
                    "imagens/motus4/Xistonosolhos.jpg"
            ],
            "resiliencia": [
                "imagens/motus5/Brincando.jpg", "imagens/motus5/DuasBarras.jpg", "imagens/motus5/edai.jpg", "imagens/motus5/Entreunseoutros.jpg",
                 "imagens/motus5/Esse!.jpg", "imagens/motus5/moderno.jpg", "imagens/motus5/OresilienteJoão.jpg", "imagens/motus5/Oúltimofôlego.jpg",
                  "imagens/motus5/Ouvidos.jpg", "imagens/motus5/Portasefrestas.jpg", "imagens/motus5/Recomeços.jpg", "imagens/motus5/Renascer.jpg",
                   "imagens/motus5/Resiliência.jpg", "imagens/motus5/Resiliente.jpg", "imagens/motus5/Sussurro.jpg", "imagens/motus5/Umalicao.jpg"
            ],
            "natureza": [
                "imagens/motus6/Aevolução.jpg", "imagens/motus6/Asnovas.jpg", "imagens/motus6/Benedicta.jpg", "imagens/motus6/Corina.jpg", 
                "imagens/motus6/duasbarras.jpg", "imagens/motus6/DuasBarras.jpg", "imagens/motus6/Embusca.jpg", "imagens/motus6/fundoverde.jpg",
                 "imagens/motus6/fundoverde2.jpg", "imagens/motus6/imagem2.jpg", "imagens/motus6/imagem3.jpg", "imagens/motus6/imagem4.jpg",
                  "imagens/motus6/imagem5.jpg", "imagens/motus6/imagem6.jpg", "imagens/motus6/moderno.jpg", "imagens/motus6/Oretorno.jpg",
                   "imagens/motus6/Ostons.jpg", "imagens/motus6/Ouvidosmoucos.jpg", "imagens/motus6/quadro.jpg", "imagens/motus6/Quemnunca.jpg"
            ],
            "motus": [
                "imagens/motus?/.jpg", "imagens/motus?/.jpg"
                //motus 1 ou 7 ou 8 preciso das imagens
            ]
        };

        // Selecionar uma imagem aleatória do array correspondente ao resultado
        const randomImage = imagens[result][Math.floor(Math.random() * imagens[result].length)];
        
        // Mostrar a imagem selecionada e o botão para conhecer o site
        resultContainer.innerHTML = `
            <img src="${randomImage}" alt="Resultado" class="fixed-size-image mb-3">
            <br>
            <a href="http://movimentoliterariodigital.atspace.cc/" target="_blank">Conheça nosso site</a>
        `;
    }
});
