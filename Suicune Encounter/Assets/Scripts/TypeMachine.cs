using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;

public class TypeMachine : MonoBehaviour
{
    public TextMeshProUGUI textObject;
    public string fullText; // The full text to display
    public float delay = 0.1f; // Delay between each character

    private string currentText = "";

    public void StartTextCoroutine(string targetText)
    {
        fullText = targetText;
        StartCoroutine(ShowText());
    }

    IEnumerator ShowText()
    {
        textObject.text = "";
        currentText = "";
        for (int i = 0; i <= fullText.Length; i++)
        {
            currentText = fullText.Substring(0, i);
            textObject.text = currentText;
            yield return new WaitForSeconds(delay);
        }
    }
}
