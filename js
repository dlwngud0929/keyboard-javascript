<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body{
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            background-color: #ccc;
        }
        .key{
            width: 50px;
            height: 50px;
            margin: 2px;
            border: 7px solid;
            border-color: #dedede #c5c1bd;
            background-color: #f5f3f1;
            border-radius: 5px;
        }
        .keycap{
            width:100%;
            height: 41px;;
            font-size: 13px;
            padding: 5px;
            box-shadow:  0 0 10px  rgba(0,0,0,2);
            border-radius: 5px;
            background-color:#f5f3f1;
        }
        .keyboard-wrapper{
            display: flex;
            background-color: #313131;
        }
         .keybord{
            display: inline-block;
            padding: 20px 10px ;
            background-color: #f5f3f1;
            box-shadow:  0 0 5px rgb(0,0,0);
            border-radius: 10px;
        } 
        .key_ctrl{
            width: 100px;
            border-color: #9fcde7;
        }
        .key_ctrl .keycap{
           background-color:  #a9dffd;

        }
        .pressed{
            transform:scale(0.95) ;
        }
    </style>
</head>

<body>
   
    <div class="keyboard-wrapper">

        <div class="key key_ctrl key--17 ">
            <div class="keycap">ctrl</div>
        </div>
        <div class="key key--90">
            <div class="keycap">z</div>

        </div>
        <div class="key key--67">
            <div class="keycap">c</div>

        </div>
        <div class="key key--86">
            <div class="keycap">v</div>
        </div>
    </div>
    <script>
        document.addEventListener("keydown", (e) => {
            console.log(e.keyCode);
            const key = document.querySelector(`.key--${e.keyCode}`);
            if (key) {
                key.classList.add("pressed");
            }
        });
    
        document.addEventListener("keyup", (e) => {
            console.log(e.keyCode);
            const key = document.querySelector(`.key--${e.keyCode}`);
            if (key) {
                key.classList.remove("pressed");
            }
        });
    </script>
    
</body>
</html>
