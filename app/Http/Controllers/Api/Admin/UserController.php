<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        // $data = User::all();
        // $data = User::get(["id", "name", "activo", "canal"]);

        $data = User::WhereHas('roles', function ($q) {
            $q->where("name", "client");
        })->get(["id", "name", "nickname", "activo", "canal"]);
        return response()->json($data, 200);
    }
    public function show($id)
    {
        $data = User::find($id);
        return response()->json($data, 200);
    }
    public function store(Request $request)
    {
    }
    public function update(Request $request, $id)
    {
        $data = User::find($id);
        $data->fill($request->all());
        // $data->assignRole('admin');
        $data->save();
        return response()->json($data, 200);
    }
    public function destroy($id)
    {
        $data = User::find($id);
        $data->delete();
        return response()->json("Borrado", 200);
    }
}
