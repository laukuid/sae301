<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AujourdhuiController extends AbstractController
{
    #[Route('/aujourdhui', name: 'app_aujourdhui')]
    public function index(): Response
    {
        return $this->render('aujourdhui/index.html.twig', [
            'page' => 'Aujourd\'hui',
        ]);
    }
}
