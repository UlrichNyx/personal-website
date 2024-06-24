using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Pokeball : MonoBehaviour
{
    public SpriteRenderer sprite;
    public void ThrowPokeball()
    {
        Animator animator = GetComponent<Animator>();
        animator.Play("pokeball_throw", -1, 0f);
    }

    public void RevealPokemon()
    {
        sprite.gameObject.SetActive(true);
    }
}
