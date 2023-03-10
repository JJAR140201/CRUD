package com.crud.crud.Entity;

import jakarta.persistence.*;
import lombok.*;

@Data
@Entity
public class Tarea {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String nombre;
    private String completado;
}
