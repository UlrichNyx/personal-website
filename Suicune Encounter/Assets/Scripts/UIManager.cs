using System;
using System.Collections;
using System.Collections.Generic;
using JetBrains.Annotations;
using UnityEditor.Animations;
using UnityEngine;

public class UIManager : MonoBehaviour
{
    private TypeMachine typeMachine;
    public string[] lines;

    public int counter;

    public bool isBattling;

    public GameObject battleMenu;

    public GameObject dialogueButton;

    public GameObject pokeball;
    void Start()
    {
        typeMachine = GetComponent<TypeMachine>();
        typeMachine.StartTextCoroutine(lines[0]);
        counter = 1;
    }

    public void NextLine()
    {
        if(isBattling)
        {
            return;
        }
        if(counter == lines.Length)
        {
            isBattling = true;
            ShowBattleMenu();
            return;
        }
        typeMachine.StartTextCoroutine(lines[counter]);
        counter += 1;
    }

    public void ShowBattleMenu()
    {
        battleMenu.SetActive(true);
        dialogueButton.SetActive(false);
        pokeball.SetActive(true);
        pokeball.GetComponent<Pokeball>().ThrowPokeball();
    }
}
