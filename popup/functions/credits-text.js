function typeWriter() {


        if (isDeleting) {

            textElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {

            textElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }


        if (!isDeleting && charIndex === currentWord.length) {

            setTimeout(() => {
                isDeleting = true;
                typingSpeed = 50;
            }, 3000);
        }

        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typingSpeed = 100;
        }

        setTimeout(typeWriter, typingSpeed);
    }


typeWriter();