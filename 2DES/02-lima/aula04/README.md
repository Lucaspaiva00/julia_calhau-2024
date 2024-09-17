<div align ="center">
<img src = "https://github.com/user-attachments/assets/2d1c29e1-410f-4f80-8e27-6e8dbe441363">
</div>


# Aula 04

- Link para acessar o meet: <a href="https://meet.google.com/gvd-ouzt-rgm">Clique aqui</a>

## CSS

- Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web podendo ser aplicado diretamente nas tags, dentro de uma tag style ou em um arquivo separado.

#### CSS Inline

- CSS Inline é quando se utiliza o css diretamente nas tags HTML como segue o exemplo.

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Inline</title>
</head>
<body style="background-image: url(assets/img/bg.jpg); background-size: cover">
    
    <h1 style="text-align: center; font-size: 100px; color: white">TITULO</h1>

</body>
</html> 

```

#### CSS Interno

- CSS Interno é quando se utiliza o css dentro de uma tag style dentro do HTML como mostra o exemplo.

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Interno</title>
    <style>
        body{
            background-image: url(assets/img/bg.jpg);
            background-size: cover;
        }
        h1{
            text-align: center;
            font-size: 100px;
        }
        .t1{
            color: blue;   
        }
        #t2{
            color: red;
        }
    </style>
</head>
<body>

    <h1 class="t1">TITULO</h1>
    <h1 id="t2">TITULO</h1>
    
</body>
</html>

```

#### CSS Externo

- CSS externo é quando se utiliza um arquivo externo ao HTML, sendo necessário linkar um arquivo no outro como mostra o exemplo.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aula 04</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <!-- Div's são containers -->
        <div class="containerheader">
            <div class="containerLogo">
                <img src="logo.png">
            </div>
            <div class="containerMenu">
                <nav>
                    <a href="index.html">Home</a>
                    <a href="contato.html">Contato</a>
                    <a href="quemsomos.html">Quem Somos</a>
                </nav>
            </div>
        </div>
    </header>
    <main>
        <div class="containerBanner">
            <img src="banner.jpg">
        </div>
        <div class="containverdiv">
            <div class="divtexto">
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> Rerum quibusdam soluta voluptas autem
                    illum
                    ratione sunt ducimus vitae illo fugit!<br> Inventore sed distinctio et veritatis pariatur quos ad
                    aspernatur voluptatum.
                </span>
            </div>
            <div class="divimagem">
                <img src="logo.png">
            </div>
        </div>
    </main>
</body>
</html>

```

```css
* {
    margin: 0px;
    padding: 0px;
}

.containerheader {
    width: 100%;
    background: red;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;

    & .containerLogo {
        width: 40%;
    }

    & .containerLogo img {
        width: 250px;
    }

    & .containerMenu {
        width: 60%;  
    }

    & .containerMenu nav {
        padding: 15px;
    }

    & .containerMenu nav a {
        color: white;
        font-size: 18px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        margin: 15px;
        text-decoration: none;
    }

    & .containerMenu nav a:hover{
        color: white;
        font-size: 20px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        padding: 10px;
        background: black;
        border-radius: 16px;
    }

}

main{
    width: 100%;

    & .containerBanner{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
    }

    & .containerBanner img {
        width: 70%;
        border-radius: 16px;
        box-shadow: 8px 8px 5px black;
    }

    & .containerBanner img:hover{
        width: 80%;
        transition: 2.0s;
        border-radius: 16px;
        box-shadow: 8px 8px 5px black;
    }

}

```

## Agora na aula 5.....
