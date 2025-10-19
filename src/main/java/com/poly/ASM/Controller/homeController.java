package com.poly.ASM.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class homeController {
    @GetMapping({"/", "/home"})
    public String homePage() {
        return "user/index";
    }

    @GetMapping("menu2")
    public String me(){
        return "layout/menu";
    }

    @GetMapping("footer")
    public String fo(){
        return "layout/footer";
    }

    @GetMapping("cart")
    public String ca(){
        return "user/cart";
    }

    @GetMapping("detail")
    public String de(){
        return "user/detail";
    }
}
